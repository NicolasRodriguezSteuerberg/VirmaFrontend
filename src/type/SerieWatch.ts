export interface SerieWatchType {
    serieId: number
    serieTitle: string
    seasonNumber: number
    episodeTitle: string | null
    number: number
    durationSeconds: number
    fileUrl: string
    nextEpisode: NextEpisodeType
}

interface NextEpisodeType {
    id: number
    number: number
    title: string
}