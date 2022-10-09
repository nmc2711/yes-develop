import Page from '@/components/page'
import Section from '@/components/section'
import Link from 'next/link'

import { GraphQLClient, gql } from 'graphql-request'

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_QL_URL as string)

const Query = gql`
	{
		posts {
			publishedAt
			title
			summary
			slug
			updatedAt
			content {
				html
			}
			coverPhoto {
				url
			}
			id
		}
	}
`
interface ArticlesType {
	publishedAt: string
	title: string
	slug: string
	summary: string
	updatedAt: string
	id: string
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

export default function Article(props: Props) {
	const { posts } = props
	return (
		<Page>
			<Section mt={1}>
				<div className='border-#f0f0f0 list-disc space-y-2 border-b-2 px-4 py-4'>
					{posts.map((item) => {
						const { title, summary, coverPhoto, id, slug } = item
						return (
							<div key={title}>
								<Link
									href={{
										pathname: '/article/[id]',
										query: {
											id: slug,
										},
									}}
								>
									<a>
										<h2 className='text-4xl font-semibold text-zinc-800 dark:text-zinc-200'>
											{title}
										</h2>

										<p className='mt-4 mb-2 text-xl text-zinc-600 dark:text-zinc-400'>
											{summary}
										</p>
										<img
											src={coverPhoto.url}
											alt={title}
											style={{ margin: '0 auto' }}
										/>
									</a>
								</Link>
							</div>
						)
					})}
				</div>
			</Section>
		</Page>
	)
}
