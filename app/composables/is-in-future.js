export function useIsInFuture(rawtime){
    if (rawtime) {
      let date = new Date(rawtime);
      let now = new Date();

      return date > now;
    } else {
      return null
    }
  }