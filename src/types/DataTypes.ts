export interface DataEntry {
    Names: string;
    State: string;
    Created: number;
    Labels: {
        'com.docker.compose.project' : string;
    };
    Image: string;
}