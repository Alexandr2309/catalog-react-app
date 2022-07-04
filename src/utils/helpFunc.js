export function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}

export const tooltipToggle = (e, isLeave = false) => {
  const { bottom, left } = getCoords(e.target);
  const nowTooltip = document.getElementById('tooltip');

  if (nowTooltip) {
    if (isLeave) {
      nowTooltip.remove();
      return;
    }
    nowTooltip.remove();
  }

  const item = document.createElement('div');
  item.textContent = 'Удалить товар';
  item.id = 'tooltip';
  document.body.append(item);

  item.style.position = 'fixed';
  item.style.left = `${left - item.clientWidth - 10}px`;
  item.style.top = `${bottom - item.clientHeight}px`;
};

export function createString(value, discount) {
  const newValue = +value - Math.round((+value / 100) * +discount);

  return (
    <>
      <span style={{ textDecoration: 'line-through', fontSize: '18px' }}>
        {value}
      </span>
      <span style={{ fontSize: '22px', fontWeight: '700' }}>
        {' '}
        {newValue} руб
      </span>
    </>
  );
}
