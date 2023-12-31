import './ComfirmModal.css';
import Card from "../Card/Card";
import Backdrop from "../BackDrop/BackDrop";

const ConfirmModal = props => {

    return <Backdrop>
        <Card className="confirmModal">
            <div className="confirmText">
                <p>{props.confirmText}</p>
            </div>
            <div className="confirmButton">
                <button onClick={props.onOk} className="okButton">确认</button>
                <button onClick={props.onCancel}>取消</button>
            </div>
        </Card>
    </Backdrop>;

};

export default ConfirmModal;
