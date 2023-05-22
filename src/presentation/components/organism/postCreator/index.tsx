import Card from "../../atoms/card";
import InputCity from "../../atoms/inputCity";
import InputDistrict from "../../atoms/inputDistrict";
import InputTitle from "../../atoms/inputTitle";
import DescriptionCounter from "../../molecules/descriptionCounter";

export default function PostCreator(){

    return (
        <Card>
            <InputTitle/>
            <DescriptionCounter/>
            <InputCity/>
            <InputDistrict/>
        </Card>
    )
}