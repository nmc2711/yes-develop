interface Props {
	children: React.ReactNode
}

const Section = ({ children }: Props) => (
	<section className='mt-14'>{children}</section>
)

export default Section
