import Image from 'next/image'
import { FC } from 'react'

import { ICollection } from '@/screens/collections/collections.interface'

const CollectionImage: FC<{ collection: ICollection }> = ({
	collection: { image, title },
}) => {
	return <Image alt={title} src={image} draggable={false} layout="fill" />
}

export default CollectionImage
