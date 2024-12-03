/**
 * 반복되는 이벤트가 계속해서 실행될 때, timeout 만큼의 시간이 흐른뒤에, 이전의 이벤트를 무시하고 이벤트 하나만 실행
 */
export default function debounce<Params extends unknown[]>(
  func: (...args: Params) => unknown,
  timeout: number,
): (...args: Params) => void {
  let timer: NodeJS.Timeout;

  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
