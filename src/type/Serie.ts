export interface SerieType {
    info: SerieInfoType
    seasons: Array<SeasonEpisodeType>
}

export interface SerieInfoType {
    id: number,
    title: string,
    description: string,
    coverUrl: string,
    releaseDate: Date
}

export interface SeasonEpisodeType {
    number: number,
    episodeList: Array<EpisodeInfoType>
}

export interface EpisodeInfoType {
    id: number,
    title: string | null,
    number: number,
    coverUrl: string,
    durationSeconds: number
}