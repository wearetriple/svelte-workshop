export function transformChain(response: any): any {
  const chainArr: any[] = [];

  function transformInnerChain(response: any) {
    if (response.species) {
      chainArr.push(response.species);
      if (response.evolves_to[0]) {
        transformInnerChain(response.evolves_to[0]);
      }
    }
  }
  transformInnerChain(response);

  return chainArr;
}
