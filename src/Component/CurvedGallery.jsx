import { useEffect, useRef, useState } from "react";

export default function CurvedGallery({
  images,
  speed = 0.035, // px per ms
  direction = 1, // 1 = left to right
  arcStrength = 0.25, // extra height at the edges
  radiusRatio = 0.8, // smaller = tighter curve
}) {
  const wrapRef = useRef(null);
  const cardRefs = useRef([]);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return undefined;
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  const count = images.length;
  const items = [...images, ...images, ...images];
  const cardWidth = Math.max(110, Math.min(230, width * 0.2));
  const cardHeight = cardWidth * 1.3;
  const step = cardWidth + 8; // arc length between card centres (constant = no overlap)
  const galleryHeight = cardHeight * (1 + arcStrength) * 1.25 + 40;

  useEffect(() => {
    if (!width || count === 0) return undefined;

    const wrap = wrapRef.current;
    const total = step * items.length;
    const R = width * radiusRatio; // cylinder radius
    let position = 0;
    let last = performance.now();
    let dragging = false;
    let pointerX = 0;
    let frame;

    const animate = (now) => {
      const dt = Math.min(now - last, 32);
      last = now;
      if (!dragging) position += direction * speed * dt;

      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        // distance along the arc from the centre, wrapped for an endless loop
        let s = (((i * step + position) % total) + total) % total;
        if (s > total / 2) s -= total;

        const theta = s / R; // angle on the cylinder (radians)
        const visible = Math.abs(theta) < 1.35;
        const a = Math.min(1, Math.abs(theta) / 0.9);
        const scaleY = 1 + a * a * arcStrength; // GPU-only, no layout = no shaking

        card.style.opacity = visible ? String(Math.max(0, 1.6 - a * 0.9)) : "0";
        // every card sits ON the circle and faces its centre, so none can overlap
        card.style.transform = `translateZ(${R}px) rotateY(${-theta}rad) translateZ(${-R}px) scaleY(${scaleY})`;
      });

      frame = requestAnimationFrame(animate);
    };

    const down = (e) => {
      dragging = true;
      pointerX = e.clientX;
      wrap.setPointerCapture(e.pointerId);
    };
    const move = (e) => {
      if (!dragging) return;
      position += e.clientX - pointerX;
      pointerX = e.clientX;
    };
    const up = () => (dragging = false);

    frame = requestAnimationFrame(animate);
    wrap.addEventListener("pointerdown", down);
    wrap.addEventListener("pointermove", move);
    wrap.addEventListener("pointerup", up);
    wrap.addEventListener("pointercancel", up);

    return () => {
      cancelAnimationFrame(frame);
      wrap.removeEventListener("pointerdown", down);
      wrap.removeEventListener("pointermove", move);
      wrap.removeEventListener("pointerup", up);
      wrap.removeEventListener("pointercancel", up);
    };
  }, [width, count, step, speed, direction, arcStrength, radiusRatio, items.length]);

  return (
    <section
      ref={wrapRef}
      aria-label="Photo gallery"
      className="relative overflow-hidden"
      style={{
        perspective: "1100px",
        height: width > 0 ? galleryHeight : "clamp(300px, 52vh, 460px)",
      }}
    >
      <div
        className="absolute inset-0 touch-pan-y cursor-grab active:cursor-grabbing"
        style={{ transformStyle: "preserve-3d" }}
      >
        {width > 0 &&
          items.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              ref={(el) => (cardRefs.current[index] = el)}
              role="img"
              aria-label={image.alt}
              className="absolute left-1/2 top-1/2 overflow-hidden rounded-md bg-white shadow-2xl will-change-transform"
              style={{
                width: cardWidth,
                height: cardHeight,
                marginLeft: -cardWidth / 2,
                marginTop: -cardHeight / 2,
                backgroundImage: `url(${image.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backfaceVisibility: "hidden",
              }}
            />
          ))}
      </div>
    </section>
  );
}