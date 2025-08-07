import { MainLayout, Container } from '@/components/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-primary/5 to-secondary/5'>
        <Container>
          <div className='text-center space-y-8'>
            <div className='space-y-4'>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight'>
                Connect Labs &{' '}
                <span className='text-primary'>Pharmaceuticals</span>
              </h1>
              <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
                AWP React Platform bridges the gap between research laboratories
                and pharmaceutical companies, enabling successful partnerships
                and breakthrough discoveries.
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/register'
                className='bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium transition-colors'
              >
                Get Started
              </Link>
              <Link
                href='/about'
                className='border border-input bg-background hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-lg font-medium transition-colors'
              >
                Learn More
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className='py-20'>
        <Container>
          <div className='text-center space-y-12'>
            <div className='space-y-4'>
              <h2 className='text-3xl sm:text-4xl font-bold'>
                Why Choose AWP React?
              </h2>
              <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
                Our platform provides everything you need to build successful
                partnerships between labs and pharmaceutical companies.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='space-y-4 p-6 rounded-lg border bg-card'>
                <div className='h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                  <span className='text-primary font-bold'>🔬</span>
                </div>
                <h3 className='text-xl font-semibold'>Lab Discovery</h3>
                <p className='text-muted-foreground'>
                  Find and connect with research laboratories that match your
                  specific requirements.
                </p>
              </div>

              <div className='space-y-4 p-6 rounded-lg border bg-card'>
                <div className='h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                  <span className='text-primary font-bold'>💊</span>
                </div>
                <h3 className='text-xl font-semibold'>Pharma Partnerships</h3>
                <p className='text-muted-foreground'>
                  Connect with pharmaceutical companies looking for research
                  collaborations.
                </p>
              </div>

              <div className='space-y-4 p-6 rounded-lg border bg-card'>
                <div className='h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                  <span className='text-primary font-bold'>🤝</span>
                </div>
                <h3 className='text-xl font-semibold'>Collaboration Tools</h3>
                <p className='text-muted-foreground'>
                  Built-in tools for proposal management, communication, and
                  project tracking.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-primary text-primary-foreground'>
        <Container>
          <div className='text-center space-y-8'>
            <div className='space-y-4'>
              <h2 className='text-3xl sm:text-4xl font-bold'>
                Ready to Get Started?
              </h2>
              <p className='text-xl opacity-90 max-w-2xl mx-auto'>
                Join thousands of labs and pharmaceutical companies already
                using our platform.
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/register'
                className='bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 rounded-lg font-medium transition-colors'
              >
                Create Account
              </Link>
              <Link
                href='/contact'
                className='border border-primary-foreground/20 hover:bg-primary-foreground/10 px-8 py-3 rounded-lg font-medium transition-colors'
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
