export function toRadians(value) {
  return value * 2 * Math.PI;
}

export function gauss2d(Xm, Ym, s) {
  let Xm2 = Math.pow(Xm, 2),
      Ym2 = Math.pow(Ym, 2),
      s2 = Math.pow(s, 2);

  return Math.exp(-((Xm2 + Ym2) / (2 * s2)));
}

export function setPixel(im, i, r, g, b, a) {
  im.data[i] = r;
  im.data[i + 1] = g;
  im.data[i + 2] = b;
  im.data[i + 3] = a;
}
