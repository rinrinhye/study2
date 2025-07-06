import { useEffect } from 'react';

const useFocusTrap = (ref, onClose) => {
  useEffect(() => {
    const layerEl = ref.current;

    // 포커스 가능한 요소 선택자
    const selector =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    // 맨 처음 포커스가 가능한 요소에 포커스가 되게!
    const firstFocusable = layerEl.querySelector(selector);
    firstFocusable?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        // esc 키 이벤트 전파되지 않게 막기
        e.stopPropagation();
        // 함수가 있으면 실행 / 없으면 무시되게
        onClose?.();
      }

      if (e.key !== 'Tab') return;

      const focusables = el.querySelectorAll(selector);
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (!first || !last) return;

      if (e.shiftKey) {
        // Shift + Tab (역방향)
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        // Tab (정방향)
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [ref, onClose]);
};
