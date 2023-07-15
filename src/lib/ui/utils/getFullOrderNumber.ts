export const getFullOrderNumber = (order: number) => {
    if (order < 10) {
      return `00${order}`;
    } else if (order < 100) {
      return `0${order}`;
    } else {
      return order;
    }
  };