import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/api/last-fm",
      permanent: true,
    },
  };
};

export default function Home() {
  return null;
}
