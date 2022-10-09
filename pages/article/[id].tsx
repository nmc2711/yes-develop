import Page from '@/components/page'
import Section from '@/components/section'

import { GraphQLClient, gql } from 'graphql-request'

const client = new GraphQLClient(process.env.NEXT_PUBLIC_QL_URL as string)
interface ArticlesType {
	content: {
		html: any
	}
}

interface Props {
	data: {
		posts: ArticlesType[]
	}
}

export default function ArticleDetail({ data }: Props) {
	return (
		<Page>
			<Section>
				<h2 className='text-xl font-semibold'>아티클</h2>

				<div className='mt-2'>
					<p className='text-zinc-600 dark:text-zinc-400'></p>
				</div>
			</Section>

			<Section>
				<div
					dangerouslySetInnerHTML={{ __html: data.posts[0].content.html }}
				></div>
			</Section>
		</Page>
	)
}

export async function getStaticPaths() {
	const Query = gql`
		{
			posts {
				slug
			}
		}
	`
	const { posts } = await client.request(Query)
	const paths = posts.map((product: { slug: string }) => {
		return {
			params: {
				id: product.slug,
			},
		}
	})

	return {
		paths,
		fallback: false,
	}
}
export async function getStaticProps({ params }: { params: { id: string } }) {
	const Query = gql`
		{
			posts(where: { slug: "${params.id}" }) {
				content {
					html
				}
			}
		}
	`
	const data = await client.request(Query)
	return {
		props: {
			data,
		},
	}
}
