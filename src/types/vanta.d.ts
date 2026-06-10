// Vanta.js ships no types. Each effect module default-exports a factory that
// takes an options object and returns an instance with a `destroy()` method.
declare module "vanta/dist/vanta.net.min" {
  const effect: (opts: Record<string, unknown>) => { destroy: () => void };
  export default effect;
}
declare module "vanta/dist/vanta.globe.min" {
  const effect: (opts: Record<string, unknown>) => { destroy: () => void };
  export default effect;
}
declare module "vanta/dist/vanta.fog.min" {
  const effect: (opts: Record<string, unknown>) => { destroy: () => void };
  export default effect;
}
declare module "vanta/dist/vanta.dots.min" {
  const effect: (opts: Record<string, unknown>) => { destroy: () => void };
  export default effect;
}
declare module "vanta/dist/vanta.rings.min" {
  const effect: (opts: Record<string, unknown>) => { destroy: () => void };
  export default effect;
}
declare module "vanta/dist/vanta.waves.min" {
  const effect: (opts: Record<string, unknown>) => { destroy: () => void };
  export default effect;
}
declare module "vanta/dist/vanta.cells.min" {
  const effect: (opts: Record<string, unknown>) => { destroy: () => void };
  export default effect;
}
