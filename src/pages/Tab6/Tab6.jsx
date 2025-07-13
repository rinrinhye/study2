import useModal from "../../hooks/useModal";
import Layer from "../../components/Tab6/Layer";

export default function Tab6() {
  const modal = useModal();

  return (
    <div className="relative py-8">
      <button
        className="rounded-sm px-4 py-6 border mx-auto w-16 block"
        type="button"
        aria-haspopup="dialog"
        aria-controls="tab6-modal"
        aria-expanded={`${modal.isOpen ? true : false}`}
        onClick={modal.toggle}
      >
        버튼
      </button>
      {modal.isOpen && <Layer modal={modal} />}
    </div>
  );
}
