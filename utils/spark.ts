export function spawnSpark(e: React.MouseEvent | React.KeyboardEvent, colorVar = '--color-surface-strong') {
  if (typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const target = e.currentTarget as HTMLElement;
  if (!target) return;

  // Prevent multiple overlapping sparks on the same element
  if (target.querySelector(':scope > .spark')) {
    return;
  }

  const rect = target.getBoundingClientRect();
  let x, y;

  // Handle keyboard events (Enter/Space) by centering the spark
  if ('clientX' in e && e.clientX > 0 && e.clientY > 0) {
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
  } else {
    // Keyboard fallback or centered fallback
    x = rect.width / 2;
    y = rect.height / 2;
  }

  const spark = document.createElement('span');
  spark.className = 'spark';
  spark.style.setProperty('--spark-x', `${x}px`);
  spark.style.setProperty('--spark-y', `${y}px`);
  
  // Resolve CSS variable to actual color if needed, or just use the var
  spark.style.setProperty('--spark-color', `var(${colorVar})`);

  // Create 4 zigzag SVG bolts radiating outward
  const svgNS = "http://www.w3.org/2000/svg";
  for (let i = 0; i < 4; i++) {
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', '0 0 16 8');
    svg.setAttribute('class', `spark-bolt spark-bolt-${i}`);
    const path = document.createElementNS(svgNS, 'path');
    path.setAttribute('d', 'M0 4 L5 0 L11 8 L16 4');
    svg.appendChild(path);
    spark.appendChild(svg);
  }

  // Ensure target can contain the absolute spark
  const currentPos = window.getComputedStyle(target).position;
  if (currentPos === 'static') {
    target.style.position = 'relative';
  }
  target.style.overflow = 'hidden';
  
  target.appendChild(spark);

  spark.addEventListener('animationend', () => spark.remove());
}
