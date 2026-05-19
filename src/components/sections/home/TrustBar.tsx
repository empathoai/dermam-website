import { trustItems } from '../../../data/trustItems';
import Container from '../../ui/Container';
import TrustItem from '../../ui/TrustItem';

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-border-soft py-4 md:py-8">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12 divide-x divide-transparent lg:divide-border-soft">
          {trustItems.map((item, idx) => (
            <div key={idx} className="flex justify-center md:pl-0">
               <TrustItem item={item} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
