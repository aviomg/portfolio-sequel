// pages/resume.tsx
import Head from 'next/head';
import React from 'react';
import { useRef, useEffect } from 'react';

export default function ResumePage() {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // Make sure the iframe fills the viewport height even if parent styles differ
    useEffect(() => {
        const setVH = () => {
            document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
        };
        setVH();
        window.addEventListener('resize', setVH);
        return () => window.removeEventListener('resize', setVH);
    }, []);

    const pdfUrl = '/resume.pdf'; // must exist at /public/resume.pdf

    return (
        <>
            <Head>
                <title>My Resume</title>
                {/* Use your existing favicon; update href if yours is not /favicon.ico */}
                <link rel="icon" href="/favicon.ico" />
                {/* Optional: theme color for nicer mobile UI */}
                <meta name="theme-color" content="#0a0a0a" />
            </Head>

            <div
                style={{
                    height: 'calc(var(--vh, 1vh) * 100)',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'var(--background, #0a0a0a)',
                }}
            >
                {/* Action bar */}
               
                {/* PDF viewer */}
                <div style={{ flex: 1, minHeight: 0 }}>
                    <iframe
                        ref={iframeRef}
                        src={pdfUrl}
                        title="Resume PDF"
                        style={{ width: '100%', height: '100%', border: 'none' }}
                    />
                </div>

                {/* Fallback for browsers/extensions that block PDF in iframes */}
                <noscript>
                    <p style={{ padding: '1rem' }}>
                        JavaScript is disabled. You can{' '}
                        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                            open the PDF here
                        </a>
                        .
                    </p>
                </noscript>
            </div>
        </>
    );
}
