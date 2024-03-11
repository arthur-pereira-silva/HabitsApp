import { Image } from "react-native";

interface StyledImageProps{
    source: string,
    style?: number
}

export default function StyledImage({source, style}:StyledImageProps){
    return(
        <Image
            source={{uri: 'asset:/mikudayo_pelucia.jpg'}}
            style={{width: 40, height: 40}}
        />
    )
}