interface Props {
	mt?: number
	children: React.ReactNode
}

const Section = ({ children, mt }: Props) => (
	<section className={mt ? `mt-${mt}` : 'mt-14'}>{children}</section>
)

export default Section
