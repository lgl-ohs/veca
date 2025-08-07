
export default async function RootLayout(props: { children: ReactNode }) {

  return (
    <html lang="en" data-toolpad-color-scheme="light">
      <body>
        {props.children}
      </body>
    </html>
  );
}
