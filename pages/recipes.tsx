import Page from '@/components/page'
import Section from '@/components/section'
import Image from 'next/image'

import { GraphQLClient, gql } from 'graphql-request'

const graphcms = new GraphQLClient(
	'https://api-ap-northeast-1.hygraph.com/v2/cl8zbbyjl0vib01tcglp1asau/master'
)

const Query = gql`
	{
		posts {
			publishedAt
			title
			summary
			updatedAt
			content {
				html
			}
			coverPhoto {
				url
			}
		}
	}
`

export async function getStaticProps() {
	const { posts } = await graphcms.request(Query)
	return {
		props: {
			posts,
		},
		revalidate: 10,
	}
}

export default function Recipes({ posts }: any) {
	console.log(posts)
	return (
		<Page>
			<Section>
				<h2 className='text-xl font-semibold'>Components</h2>

				<div className='mt-2'>
					<p className='text-zinc-600 dark:text-zinc-400'></p>
				</div>
			</Section>

			<Section>
				<h3 className='font-medium'>그랲ql 글 테스트</h3>

				<ul className='list-disc space-y-2 px-6 py-2'>
					{posts.map((item: any, key: any) => {
						console.log(item)
						return (
							<li key={key}>
								{item.summary}
								<img src={item.coverPhoto.url} />
							</li>
						)
					})}
				</ul>
			</Section>
		</Page>
	)
}
