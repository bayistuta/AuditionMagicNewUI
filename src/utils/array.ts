export const range = (start: number, stop: number) => {
    return [...Array(stop + 1).keys()]
      .filter(i => i >= start)
}
