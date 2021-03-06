import { GetStaticProps, NextPage } from 'next'

import CatalogMovies from '@/ui/catalog-movies/CatalogMovies'

import { IMovie } from '@/shared/types/movie.types'

import { MovieService } from '@/services/movie.service'

const FreshPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<CatalogMovies
			title="Новинки"
			movies={movies || []}
			description="Новые фильмы и сериалы в лучшем качестве"
		/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll()

		return {
			props: {
				movies,
			},
			revalidate: 60,
		}
	} catch (e) {
		return {
			notFound: true,
		}
	}
}

export default FreshPage
