const colors = {
  green: (parametro) => console.log("\x1b[32m", parametro),
  red: (parametro) => console.log("\x1b[31m", parametro),
  yellow: (parametro) => console.log("\x1b[33m", parametro),
  blue: (parametro) => console.log("\x1b[34m", parametro),
  magenta: (parametro) => console.log("\x1b[35m", parametro),
  cyan: (parametro) => console.log("\x1b[36m", parametro),
  white: (parametro) => console.log("\x1b[37m", parametro),
  black: (parametro) => console.log("\x1b[30m", parametro),
  underscore: (parametro) => console.log("\x1b[4m", parametro),
  bright: (parametro) => console.log("\x1b[1m", parametro),
  hidden: (parametro) => console.log("\x1b[8m", parametro),
  reverse: (parametro) => console.log("\x1b[7m", parametro),
  dim: (parametro) => console.log("\x1b[2m", parametro)
};

module.exports = colors;
