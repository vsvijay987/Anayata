export interface Post {
    _id: string;
    _createdAt: string;
    title: string;
    author: {
        name: string;
        image: string;
    };
    comments: Comment[];
    description: string;
    mainImage: {
        asset: {
            url: string;
        };
    };
    slug: {
        current: string;
    };
    body: [object];
}

export interface Comment {
    comment: string;
    email: string;
    name: string;
    _id: string;
}

export interface BannerType {
    mainImage: {
        asset: {
            url: string;
        };
    };
    _id: string;
}
