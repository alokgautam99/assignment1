import Image from "next/image";
import placeDetailCss from "../../src/styles/PlaceDetail.module.css";

const placeDetail = ({data}) => {
    const {name,image,description,activities} = data;
    return (
        <>
            <div className={placeDetailCss.wrapper}>
                <div className={placeDetailCss.info}>
                    <div className={placeDetailCss.heading}>
                        {name}
                    </div>
                    <div className={placeDetailCss.subHeading}>
                        {description}
                    </div>
                </div>
                <div className={placeDetailCss.placeImage}>
                    <Image src={image} alt='icon' width={500} height={300} />
                </div>
                <div className={placeDetailCss.details}>
                    <div className={placeDetailCss.activityHeading}>
                        Activities:
                    </div>
                    <div className={placeDetailCss.activity}>
                    <ol>
                        {activities.map((item,index)=>{
                            return (
                                <li key={index}>{item.name}</li>
                            );
                        })}
                    </ol>
                    </div>
                </div>
            </div>
        </>
    );
}

export default placeDetail;
