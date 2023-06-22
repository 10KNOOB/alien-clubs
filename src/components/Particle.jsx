import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  const options = {
    name: "Hyperspace",
    background: {
      color: "#000",
    },

    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value: 1000,
        },
      },
      size: {
        value: 2,
        random: true,
        min: 1,
        max: 3,
      },
      color: {
        value: "#ffffff",
        random: true,
        gradient: {
          type: "linear",
          start: {
            color: "#ffffff",
          },
          end: {
            color: "#000000",
          },
        },
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      life: {
        value: 2,
        random: true,
        min: 1,
        max: 3,
      },
      speed: {
        value: 3,
        random: true,
        min: 1,
        max: 5,
      },
      direction: {
        value: "0",
        random: true,
        min: -180,
        max: 180,
      },
      gravity: {
        enable: false,
        value: 0,
      },
      repulsion: {
        enable: false,
        strength: 100,
        distance: 50,
      },
      collision: {
        enable: false,
        bounce: 1,
        friction: 0.5,
      },
      custom: {
        data: {
          foo: "bar",
        },
      },
      move: {
        enable: true, // Enable particle movement
        speed: 3, // Adjust the speed of particles

        // Set the direction to make particles come from the screen
        direction: 90, // Angle in degrees, 90 for downward direction

        // Disable random direction changes
        random: false,
        trail: {
          fill: { color: "#000" },
          length: 20,
          enable: true,
        },
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
};

export default Particle;
