import info from "../assets/user-info.json";

interface IItem {
    item: string;
    desc: string;
}

interface IUser {
    overview: string[];
    infos: IItem[];
}

interface IWork {
    title: string;
    overview: string;
    items: IItem[];
}

interface IResume {
    title: string;
    overview: string;
    period: string;
    keypoint: string;
}

interface IProduct {
    title: string;
    overview: string;
    items: IItem[];
}

interface IInfo {
    user: IUser;
    works: IWork[];
    resume: IResume[];
    products: IProduct[];
}

export const InfoJson = info as IInfo;