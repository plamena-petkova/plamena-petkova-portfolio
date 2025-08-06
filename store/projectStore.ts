import { create } from "zustand";
import { supabase } from "../lib/supabase";
import { createJSONStorage, persist } from "zustand/middleware";

export type ProjectProps = {
  id: string;
  created_at: string;
  title: string;
  overview: string;
  description: string;
  techStack: string[];
  gitRepos: gitReposProps[];
  liveDemo: string;
  picture: string;
  developer: string;
};

type gitReposProps = {
  use: string;
  link: string;
};

type ProjectStore = {
  projects: ProjectProps[];
  loading: boolean;
  error: string | null;
  fetchProjects: () => Promise<void>;
};

export const useProjectsStore = create<ProjectStore>()(
  persist(
    (set) => ({
      projects: [],
      loading: false,
      error: null,

      fetchProjects: async () => {
        set({ loading: true, error: null });

        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .order("id", { ascending:true });

        if (error) {
          set({ error: error.message, loading: false });
        } else {
          set({ projects: data || [], loading: false });
        }
      },
    }),
    {
      name: "projects-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
