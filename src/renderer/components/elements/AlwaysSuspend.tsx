const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const AlwaysSuspend = () => {
  throw sleep(1000);
};

export default AlwaysSuspend;
