import MovieEdit from '@/screens/admin/movies/MovieEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const MovieEditPage: NextPageAuth = () => {
	return <MovieEdit />
}

MovieEditPage.isOnlyAdmin = true

export default MovieEditPage
