import CardComponent from "../components/CardComponent";
import InputComponent from "../components/InputComponent";
import UploadPhotoComponent from "../components/UploadPhotoComponent";

export const PublicationView = () => {
  return (
    <div className="publication-view">
        <header>
            <h1>Product Details</h1>
            <div className="form">
                <InputComponent />
                <br/>
                <InputComponent />
            </div>
        </header>
        <div className="body">
            <div className="form publication-details">
                <InputComponent widthValue={"30"}/>
                <InputComponent widthValue={"30"}/>
                <InputComponent widthValue={"30"}/>
            </div>
            <div className="form publication-details">
                <UploadPhotoComponent />
            </div>
        </div>
    </div>
  )
}

export default PublicationView;