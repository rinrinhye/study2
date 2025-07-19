import useModal from "../../hooks/useModal";
import LayerCoupon from "../../components/Layer/LayerCoupon";
import LottieBox from "../../components/Tab6/Lottie/LottieBox";
import Button from "../../components/Common/Button";

export default function Tab6() {
  const modal = useModal();

  return (
    <>
      <div className="relative py-8 text-center">
        <Button
          onClick={modal.toggle}
          text={"open Layer"}
          isExpanded={modal.isOpen ? true : false}
          ariaControls="tab6-modal"
        />
        {modal.isOpen && <LayerCoupon modal={modal} />}
      </div>
      <LottieBox />
    </>
  );
}
