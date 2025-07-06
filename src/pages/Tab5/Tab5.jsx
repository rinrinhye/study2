import { useState } from 'react';
import useModal from '../../hooks/useModal';
import LayerSearch from '../../components/Tab5/LayerSearch';

export default function Tab5() {
  const [lastFocusedButton, setLastFocusedButton] = useState(null);
  const modal = useModal();

  const openLayer = (e) => {
    setLastFocusedButton(e.currentTarget);
    modal.open();
  };

  const closeLayer = () => {
    modal.close();
    setTimeout(() => {
      lastFocusedButton?.focus();
    }, 0); // 포커스 복귀는 렌더 후에!
  };

  return (
    <>
      <div className="mx-auto w-48">
        <button type="button" onClick={openLayer}>
          열기1
        </button>
        <button type="button" onClick={openLayer}>
          열기2
        </button>
        <button type="button" onClick={openLayer}>
          열기3
        </button>
      </div>
      {modal.isOpen && <LayerSearch closeLayer={closeLayer} />}
    </>
  );
}
