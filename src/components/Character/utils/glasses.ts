import * as THREE from "three";

function roundedLens(width: number, height: number, radius: number) {
  const shape = new THREE.Shape();
  const x = -width / 2, y = -height / 2;
  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);
  return shape;
}

export function addGlasses(character: THREE.Object3D) {
  const head = character.getObjectByName("spine006");
  if (!head || character.getObjectByName("portfolio-glasses")) return;

  const glasses = new THREE.Group();
  glasses.name = "portfolio-glasses";
  // Authored in the model's bind-pose coordinates, then attached to its head bone.
  glasses.position.set(0, 13.28, 1.035);
  const frameMaterial = new THREE.MeshStandardMaterial({ color: 0x17131e, roughness: 0.35, metalness: 0.2 });
  const lensMaterial = new THREE.MeshStandardMaterial({ color: 0xc6b7e5, transparent: true, opacity: 0.1, roughness: 0.15, depthWrite: false, side: THREE.DoubleSide });
  const outline = roundedLens(0.74, 0.51, 0.13);
  const opening = roundedLens(0.66, 0.43, 0.1);
  const hole = new THREE.Path(opening.getPoints(12));
  outline.holes.push(hole);
  const frameGeometry = new THREE.ExtrudeGeometry(outline, { depth: 0.045, bevelEnabled: false, curveSegments: 8 });
  const lensGeometry = new THREE.ShapeGeometry(opening, 8);
  for (const side of [-1, 1]) {
    const frame = new THREE.Mesh(frameGeometry, frameMaterial);
    frame.position.x = side * 0.43;
    glasses.add(frame);
    const lens = new THREE.Mesh(lensGeometry, lensMaterial);
    lens.position.set(side * 0.43, 0, 0.02);
    glasses.add(lens);
    const temple = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.045, 0.85), frameMaterial);
    temple.position.set(side * 0.8, 0.1, -0.4);
    glasses.add(temple);
  }
  const bridge = new THREE.Mesh(new THREE.TubeGeometry(new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(-0.08, 0.06, 0.02),
    new THREE.Vector3(0, 0.17, 0.08),
    new THREE.Vector3(0.08, 0.06, 0.02)
  ), 8, 0.025, 6, false), frameMaterial);
  glasses.add(bridge);
  character.add(glasses);
  character.updateMatrixWorld(true);
  head.attach(glasses);
}
