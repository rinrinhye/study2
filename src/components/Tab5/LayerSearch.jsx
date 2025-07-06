import { useEffect, useRef } from 'react';
import ModalPortal from '../Common/ModalPortal';
import { IoMdClose } from 'react-icons/io';

const buttons = ['호텔', '리조트', '펜션', '모텔'];
const amenities = [
  '픽업',
  '무료조식',
  '수영장',
  '스파',
  '세미나실',
  '인터넷(Wifi)',
  '노래방',
  '농구장',
  '족구장',
  '캠프파이어',
];

const LayerSearch = ({ closeLayer }) => {
  const modalRef = useRef();

  useEffect(() => {
    const firstFocusable = modalRef.current?.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    firstFocusable?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLayer();
      }

      // Focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeLayer]);

  return (
    <ModalPortal>
      <div
        ref={modalRef}
        className="fixed w-md top-8 left-1/2 t -translate-x-1/2 border rounded-2xl bg-white"
      >
        <div className="relative text-center py-4">
          <p>상세검색</p>
          <button
            type="button"
            className="absolute top-4 right-4"
            onClick={closeLayer}
          >
            <IoMdClose size={20} />
          </button>
        </div>
        <div>
          <div>
            {buttons.map((btn) => (
              <button type="button" className="border rounded-lg">
                {btn}
              </button>
            ))}
          </div>
          <div>
            <p>가격</p>
            <p>1만원 ~ 100만원 이상</p>
            <input type="range" name="" id="" />
          </div>
          <div>
            <p>호텔명</p>
            <input type="text" className="border" />
          </div>
          <div>
            <p>부대/편의시설</p>
            <div className="grid grid-cols-5">
              {amenities.map((item) => (
                <button type="button" className="border w-20 h-20">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default LayerSearch;
