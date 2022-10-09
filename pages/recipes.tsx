import Page from '@/components/page'
import Section from '@/components/section'

import { GraphQLClient, gql } from 'graphql-request'

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_QL_URL as string)

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
interface ArticlesType {
	publishedAt: string
	title: string
	summary: string
	updatedAt: string
	content: {
		html: any
	}
	coverPhoto: {
		url: string
	}
}

interface Props {
	posts: ArticlesType[]
}

export async function getStaticProps() {
	const { posts } = await graphcms.request(Query)
	return {
		props: {
			posts,
		},
		revalidate: 10,
	}
}

export default function Recipes(props: Props) {
	const { posts } = props
	return (
		<Page>
			<Section>
				<h2 className='text-xl font-semibold'>아티클</h2>

				<div className='mt-2'>
					<p className='text-zinc-600 dark:text-zinc-400'></p>
				</div>
			</Section>

			<Section>
				<h3 className='font-medium'>그랲ql 글 테스트</h3>

				<ul className='list-disc space-y-2 px-6 py-2'>
					{posts.map((item) => {
						const { title, summary, coverPhoto } = item
						return (
							<li key={title}>
								{title}
								{summary}
								<img src={coverPhoto.url} alt={title} />
							</li>
						)
					})}
				</ul>
			</Section>
		</Page>
	)
}
