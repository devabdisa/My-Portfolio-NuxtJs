<script setup lang="ts">
interface Props {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  animationSpeed: 0.4,
  opacities: () => [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors: () => [[0, 255, 255]],
  containerClassName: "",
  showGradient: true,
});

const canvasRef = ref<HTMLCanvasElement | null>(null);
const containerRef = ref<HTMLElement | null>(null);
let animationFrameId: number;
let particles: any[] = [];

const resizeCanvas = () => {
  if (containerRef.value && canvasRef.value) {
    canvasRef.value.width = containerRef.value.offsetWidth;
    canvasRef.value.height = containerRef.value.offsetHeight;
    createParticles();
  }
};

const createParticles = () => {
  if (!canvasRef.value) return;
  particles = [];
  const particleCount = Math.floor(
    (canvasRef.value.width * canvasRef.value.height) / 6000,
  );

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvasRef.value.width,
      y: Math.random() * canvasRef.value.height,
      size: props.dotSize || Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * props.animationSpeed,
      speedY: (Math.random() - 0.5) * props.animationSpeed,
      opacity:
        props.opacities[Math.floor(Math.random() * props.opacities.length)],
      color: props.colors[Math.floor(Math.random() * props.colors.length)],
    });
  }
};

const drawParticles = () => {
  if (!canvasRef.value) return;
  const ctx = canvasRef.value.getContext("2d");
  if (!ctx) return;

  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);

  particles.forEach((particle) => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${particle.color[0]}, ${particle.color[1]}, ${particle.color[2]}, ${particle.opacity})`;
    ctx.fill();

    // Update position
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    // Wrap around edges
    if (particle.x < 0) particle.x = canvasRef.value!.width;
    if (particle.x > canvasRef.value!.width) particle.x = 0;
    if (particle.y < 0) particle.y = canvasRef.value!.height;
    if (particle.y > canvasRef.value!.height) particle.y = 0;
  });

  animationFrameId = requestAnimationFrame(drawParticles);
};

onMounted(() => {
  resizeCanvas();
  drawParticles();
  window.addEventListener("resize", resizeCanvas);
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
  window.removeEventListener("resize", resizeCanvas);
});

watch(
  () => [props.animationSpeed, props.colors, props.opacities, props.dotSize],
  () => {
    createParticles();
  },
);
</script>

<template>
  <div
    ref="containerRef"
    :class="['h-full w-full relative', containerClassName]"
  >
    <canvas ref="canvasRef" class="h-full w-full" />
    <div
      v-if="showGradient"
      class="absolute inset-0 bg-gradient-to-t from-gray-950 to-80% opacity-50"
    />
  </div>
</template>
