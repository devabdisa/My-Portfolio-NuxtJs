<script setup lang="ts">
useHead({
  title: "Abdisa Ketema | Full Stack Developer",
  meta: [
    {
      name: "description",
      content:
        "Portfolio of Abdisa Ketema, a full-stack developer focused on React, Next.js, and TypeScript.",
    },
  ],
});

const { projects } = useProjects();
const featuredProjects = computed(() => projects.slice(0, 2));

const skills = [
  "Javascript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Prisma",
  "Git",
  "Github",
];

const highlights = [
  {
    icon: "lucide:code-2",
    title: "Clean Code",
    description:
      "I write clean, maintainable code that’s easy to understand and extend.",
  },
  {
    icon: "lucide:rocket",
    title: "Performance",
    description:
      "Performance-first development to ensure fast load times and smooth UX.",
  },
  {
    icon: "lucide:users",
    title: "Collaboration",
    description:
      "Strong communicator who works well with teams and stakeholders.",
  },
  {
    icon: "lucide:lightbulb",
    title: "Innovation",
    description:
      "Always exploring new technologies to build better and smarter solutions.",
  },
];

const experiences = [
  {
    period: "Mar 2025 - Present",
    role: "MERN Stack Developer & Instructor",
    company: "TNT Ethiopia",
    description:
      "Teaching MERN stack and programming with C++ & Java on YouTube. Building a Learning Management System with Next.js to enhance educational delivery.",
    technologies: ["Next.js", "MERN Stack", "C++", "Java"],
    current: true,
  },
  {
    period: "Dec 2024 - Present",
    role: "Software Development Member",
    company: "SPEC JIT",
    description:
      "Building and learning software product development with students at Jimma University. Mentoring teams, collaborating on projects, and competing in hackathons.",
    technologies: ["Software Development", "Teamwork", "Hackathons"],
    current: true,
  },
  {
    period: "Jun 2024 - Sep 2024",
    role: "Web Developer Intern",
    company: "Blue Ocean Creatives",
    description:
      "Worked on ERP systems, stock management solutions, and website development. Contributed to project execution while gaining hands-on experience in tech and teamwork.",
    technologies: ["ERP Systems", "Stock Management", "Web Dev"],
    current: false,
  },
];

const approaches = [
  {
    title: "Planning & Strategy",
    des: "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
    order: "Phase 1",
    colors: [[16, 185, 129]], // Emerald
  },
  {
    title: "Development & Progress Update",
    des: "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
    order: "Phase 2",
    colors: [
      [236, 72, 153],
      [232, 121, 249],
    ], // Pink/Fuchsia
  },
  {
    title: "Development & Launch",
    des: "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
    order: "Phase 3",
    colors: [[14, 165, 233]], // Sky
  },
];
</script>

<template>
  <div class="overflow-x-hidden">
    <!-- Hero Section -->
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <!-- Background Image from Reference -->
      <div class="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          class="w-full h-full object-cover opacity-20"
        />
        <div
          class="absolute inset-0 bg-gradient-to-b from-[#0f1418]/20 via-[#0f1418]/80 to-[#0f1418]"
        ></div>
      </div>

      <!-- Green Floating Dots from Reference -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          v-for="i in 20"
          :key="i"
          class="absolute w-1.5 h-1.5 rounded-full opacity-40 bg-[#20B2A6] animate-slow-drift"
          :style="{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 20}s`,
          }"
        ></div>
      </div>

      <!-- Content Container -->
      <div class="container mx-auto px-6 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center pt-20 pb-32">
          <!-- Left Column: Text -->
          <div class="space-y-8" v-motion-fade-visible-once>
            <div class="animate-fade-in">
              <span
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary-400 font-medium border border-primary-900/50"
              >
                <span
                  class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"
                ></span>
                Full Stack Developer
              </span>
            </div>

            <h1
              class="text-5xl md:text-7xl font-bold leading-tight text-white glow-text"
            >
              Building <span class="text-primary-500">performant</span><br />
              and scalable web products.
            </h1>

            <p class="text-lg text-gray-400 max-w-lg leading-relaxed">
              Hi, I’m
              <span class="text-white font-bold tracking-tight"
                >Abdisa Ketema</span
              >, a full-stack developer focused on React, Next.js, and
              TypeScript. I build scalable, high-performance web applications
              with clean code and great user experience.
            </p>

            <div class="flex flex-wrap gap-4 pt-4 items-center">
              <NuxtLink
                to="/contact"
                class="px-8 py-4 bg-primary-600 text-white rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-primary-500/20 flex items-center justify-center gap-2"
              >
                Contact Me <Icon name="lucide:arrow-right" class="w-5 h-5" />
              </NuxtLink>
              <AnimatedBorderButton
                @click="
                  () =>
                    window.open(
                      'https://drive.google.com/file/d/1nlKNqnHYVYL3smWO1uOqvNCnZisNA2E_/view?usp=sharing',
                      '_blank',
                    )
                "
              >
                <Icon name="lucide:download" class="w-5 h-5" /> Download CV
              </AnimatedBorderButton>
            </div>

            <!-- Social Links -->
            <div class="flex items-center gap-4 pt-6">
              <span class="text-sm text-gray-500 dark:text-gray-400"
                >Follow me:</span
              >
              <div class="flex gap-3">
                <a
                  href="https://github.com/devabdisa"
                  target="_blank"
                  class="p-2.5 rounded-full glass bg-white/10 hover:bg-primary-50 dark:hover:bg-primary-900/30 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                >
                  <Icon name="lucide:github" class="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abdisa-ketema/"
                  target="_blank"
                  class="p-2.5 rounded-full glass bg-white/10 hover:bg-primary-50 dark:hover:bg-primary-900/30 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                >
                  <Icon name="lucide:linkedin" class="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/@ethiopandatech"
                  target="_blank"
                  class="p-2.5 rounded-full glass bg-white/10 hover:bg-primary-50 dark:hover:bg-primary-900/30 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                >
                  <Icon name="lucide:youtube" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <!-- Right Column: Profile Image -->
          <div
            class="relative flex justify-center lg:justify-end"
            v-motion-fade-visible-once
          >
            <div class="relative max-w-md w-full">
              <div
                class="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/30 via-transparent to-primary-500/10 blur-2xl animate-pulse"
              ></div>
              <div
                class="relative glass rounded-3xl p-3 border border-white/20 dark:border-gray-700/50 group"
              >
                <img
                  src="/profile-photo2.jpg"
                  alt="Abdisa Ketema"
                  class="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />

                <div
                  class="absolute -top-6 -left-6 glass bg-white/90 dark:bg-gray-800/90 p-5 rounded-2xl shadow-xl animate-float border border-white/20"
                >
                  <div
                    class="text-3xl font-bold text-primary-600 dark:text-primary-400"
                  >
                    1+
                  </div>
                  <div
                    class="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider"
                  >
                    Years Exp.
                  </div>
                </div>

                <div
                  class="absolute -bottom-6 -right-6 glass bg-white/90 dark:bg-gray-800/90 px-6 py-4 rounded-2xl shadow-xl animate-float border border-white/20"
                  style="animation-delay: 1s"
                >
                  <div class="flex items-center gap-3">
                    <div class="w-3.5 h-3.5 bg-green-500 rounded-full relative">
                      <div
                        class="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"
                      ></div>
                    </div>
                    <span
                      class="text-sm font-bold text-gray-800 dark:text-gray-100"
                      >Available for work</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Slider -->
    <div
      class="py-10 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-100 dark:border-gray-800 overflow-hidden"
    >
      <div class="flex animate-marquee whitespace-nowrap">
        <span
          v-for="skill in [...skills, ...skills, ...skills]"
          :key="skill"
          class="mx-10 text-2xl font-bold text-gray-300 dark:text-gray-700 hover:text-primary-600 transition-colors cursor-default"
        >
          {{ skill }}
        </span>
      </div>
    </div>

    <!-- About Section -->
    <section id="about" class="py-32 bg-[#0f1418]">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div v-motion-slide-visible-once-left>
            <span
              class="text-primary-400 text-sm font-bold tracking-widest uppercase mb-4 block"
              >About Me</span
            >
            <h2
              class="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight"
            >
              Coding with purpose, <br />
              <span class="font-serif italic font-normal text-white"
                >teaching with passion.</span
              >
            </h2>

            <div class="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                I’m a skilled and passionate full-stack developer who helps
                businesses get a fresh, creative start through well-built web
                applications. I’m detail-oriented, committed, and strong in
                problem-solving, time management, and organization.
              </p>
              <p>
                I’ve developed and deployed real-world web applications using
                clean coding principles and test-driven development. Beyond
                development, I teach programming on the
                <a
                  href="https://www.youtube.com/@ethiopandatech"
                  target="_blank"
                  class="text-primary-400 hover:underline font-bold decoration-2"
                  >@ethiopandatech</a
                >
                and
                <a
                  href="https://www.youtube.com/@tntethiopia"
                  target="_blank"
                  class="text-primary-400 hover:underline font-bold decoration-2"
                  >@tntethiopia</a
                >
                YouTube channels.
              </p>
            </div>

            <div
              class="mt-10 p-8 glass rounded-3xl glow-border italic text-xl text-white font-medium"
            >
              "I aim to build products that feel good to use, scale reliably,
              and remain enjoyable to maintain as they grow"
            </div>
          </div>

          <div
            class="grid sm:grid-cols-2 gap-6"
            v-motion-slide-visible-once-right
          >
            <div
              v-for="(item, idx) in highlights"
              :key="idx"
              class="p-8 glass rounded-3xl hover:bg-primary-950/20 transition-all border-transparent group"
            >
              <div
                class="w-14 h-14 rounded-2xl bg-primary-900/30 flex items-center justify-center mb-6 text-primary-400 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300"
              >
                <Icon :name="item.icon" class="w-7 h-7" />
              </div>
              <h3 class="text-xl font-bold mb-3 text-white">
                {{ item.title }}
              </h3>
              <p class="text-gray-400 leading-relaxed">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section
      id="experience"
      class="py-32 bg-[#0f1418] relative overflow-hidden"
    >
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="text-center mb-20" v-motion-fade-visible-once>
          <span
            class="text-primary-400 text-sm font-bold tracking-widest uppercase mb-4 block text-center"
            >Career Journey</span
          >
          <h2 class="text-4xl md:text-5xl font-bold text-white">Experience</h2>
        </div>

        <div class="relative">
          <!-- Timeline Line -->
          <div
            class="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/50 via-primary-500/10 to-transparent md:-translate-x-1/2"
          ></div>

          <div class="space-y-16">
            <div
              v-for="(exp, idx) in experiences"
              :key="idx"
              class="relative grid md:grid-cols-2 gap-8"
              :class="{ 'md:text-right': idx % 2 === 0 }"
              v-motion-fade-visible-once
            >
              <div
                class="absolute left-0 md:left-1/2 top-0 w-5 h-5 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 transform -translate-x-[9px] md:-translate-x-2.5 z-10"
              >
                <span
                  v-if="exp.current"
                  class="absolute inset-0 w-full h-full bg-primary-500 rounded-full animate-ping opacity-75"
                ></span>
              </div>

              <div
                :class="[
                  idx % 2 === 0
                    ? 'md:pr-16 md:col-start-1'
                    : 'md:pl-16 md:col-start-2',
                  'pl-8 md:pl-0',
                ]"
              >
                <div
                  class="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-500 group"
                >
                  <span
                    class="text-primary-600 dark:text-primary-400 font-bold text-sm mb-2 block uppercase"
                    >{{ exp.period }}</span
                  >
                  <h3
                    class="text-2xl font-bold text-gray-900 dark:text-white mb-1"
                  >
                    {{ exp.role }}
                  </h3>
                  <p
                    class="text-gray-500 dark:text-gray-400 font-medium mb-4 text-lg"
                  >
                    {{ exp.company }}
                  </p>
                  <p
                    class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
                  >
                    {{ exp.description }}
                  </p>

                  <div
                    class="flex flex-wrap gap-2"
                    :class="{ 'md:justify-end': idx % 2 === 0 }"
                  >
                    <span
                      v-for="tech in exp.technologies"
                      :key="tech"
                      class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-bold text-gray-600 dark:text-gray-300 rounded-lg group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Approach Section -->
    <section id="approach" class="py-32 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-20" v-motion-fade-visible-once>
          <span
            class="text-primary-600 dark:text-primary-400 text-sm font-bold tracking-widest uppercase mb-4 block"
            >Workflow</span
          >
          <h2
            class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white italic"
          >
            My
            <span
              class="text-primary-600 dark:text-primary-400 font-serif not-italic"
              >Approach</span
            >
          </h2>
        </div>

        <div
          class="flex flex-col lg:flex-row items-center justify-center w-full gap-8"
        >
          <ApproachCard
            v-for="(approach, idx) in approaches"
            :key="idx"
            :title="approach.title"
            :des="approach.des"
            :order="approach.order"
            v-motion-slide-visible-once-bottom
          >
            <template #canvas>
              <CanvasRevealEffect
                :animation-speed="3"
                container-class-name="bg-gray-900"
                :colors="approach.colors"
              />
            </template>
          </ApproachCard>
        </div>
      </div>
    </section>

    <!-- Project CTA Section -->
    <section
      class="py-32 bg-gray-900 text-white text-center relative overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-gradient-to-r from-primary-900/40 to-secondary-900/40 opacity-50"
      ></div>
      <div class="max-w-4xl mx-auto px-6 relative z-10">
        <h2 class="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Ready to see what <br />
          I've been <span class="text-primary-400">working on?</span>
        </h2>
        <p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          I've built everything from simple landing pages to complex e-learning
          platforms. Check out the full gallery of my work.
        </p>
        <NuxtLink
          to="/projects"
          class="inline-flex py-5 px-12 bg-white text-gray-900 font-bold rounded-2xl text-xl hover:scale-110 transition-transform shadow-2xl shadow-primary-500/20"
        >
          Explore Projects
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}
.animate-float {
  animation: float 5s ease-in-out infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.33%);
  }
}
.animate-marquee {
  animation: marquee 40s linear infinite;
}

@keyframes blob {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
