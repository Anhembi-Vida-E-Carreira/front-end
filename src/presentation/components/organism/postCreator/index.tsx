import Card from "../../atoms/card";
import InputCity from "../../atoms/inputCity";
import InputDistrict from "../../atoms/inputDistrict";
import InputMedia from "../../atoms/inputMedia";
import InputStation from "../../atoms/inputStation";
import InputTitle from "../../atoms/inputTitle";
import ButtonSubmit from "../../atoms/submitButton";
import DescriptionCounter from "../../molecules/descriptionCounter";
import ImagesShower from "../../molecules/imagesContainer/createPost";

export default function PostCreator(){

    return (
        <Card>
            <InputTitle/>
            <DescriptionCounter/>
            <InputCity/>
            <InputDistrict/>
            <InputStation/>
            <InputMedia/>
            <ImagesShower/>
            <ButtonSubmit/>
        </Card>
    )
}