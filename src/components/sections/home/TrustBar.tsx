import { trustItems } from '../../../data/trustItems';
import Container from '../../ui/Container';
import TrustItem from '../../ui/TrustItem';
import ResponsiveCardGroup from '../../ui/ResponsiveCardGroup';

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-border-soft py-4 md:py-8">
      <Container>
        <ResponsiveCardGroup desktopColumns={4} desktopClassName="gap-4 lg:gap-12" mobileCardWidth="78vw">
          {trustItems.map((item, idx) => (
            <div key={idx} className="flex justify-center md:pl-0">
               <TrustItem item={item} />
            </div>
          ))}
        </ResponsiveCardGroup>
      </Container>
    </section>
  );
}
