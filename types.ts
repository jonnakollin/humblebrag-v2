export interface BlogPost {
    title: string;
    teaserImage: string;
    publishedDate: string;
    category: string;
    content: string;
    images: string[];
}

export interface BlogPosts {
    posts: BlogPost[];
}

export interface Page {
    title: string;
    slug: string;
    image: Asset;
    content: string;
}

export interface Asset {
    fields: {
        file: {
            url: string;
        };
    };
}

export interface LinkItems {
    name: string;
    path: string;
    external: boolean;
}