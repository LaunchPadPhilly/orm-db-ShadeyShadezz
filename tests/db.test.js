import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('Database Schema and Operations', () => {
  const TEST_TITLE = "Test DB";

  // Clean up test data before and after each test
  beforeEach(async () => {
    await prisma.project.deleteMany({
      where: { title: { contains: TEST_TITLE } }
    });
  });

  afterEach(async () => {
    await prisma.project.deleteMany({
      where: { title: { contains: TEST_TITLE } }
    });
  });

  describe('Project Model Schema', () => {
    it('should create a project with all required fields', async () => {
      const projectData = {
        title: "Test DB Project",
        description: "A test project for database validation",
        technologies: ["Next.js", "Prisma"]
      };

      const project = await prisma.project.create({ data: projectData });

      expect(project.id).toBeDefined();
      expect(typeof project.id).toBe('number');
      expect(project.title).toBe(projectData.title);
      expect(project.description).toBe(projectData.description);
      expect(project.technologies).toEqual(projectData.technologies);
      expect(project.createdAt).toBeInstanceOf(Date);
      expect(project.updatedAt).toBeInstanceOf(Date);
    });

    it('should update a project record', async () => {
      const project = await prisma.project.create({
        data: {
          title: "Test DB Update Project",
          description: "Original description",
          technologies: ["React"]
        }
      });

      const updatedProject = await prisma.project.update({
        where: { id: project.id },
        data: {
          title: "Test DB Update Modified",
          description: "Updated description",
          technologies: ["TypeScript"]
        }
      });

      expect(updatedProject.title).toBe("Test DB Update Modified");
      expect(updatedProject.description).toBe("Updated description");
      expect(updatedProject.technologies).toEqual(["TypeScript"]);
      expect(updatedProject.id).toBe(project.id);
    });
  });

  describe('Database Queries', () => {
    beforeEach(async () => {
      await prisma.project.createMany({
        data: [
          { title: "Test DB Query Project 1", description: "First", technologies: ["React", "Node.js"] },
          { title: "Test DB Query Project 2", description: "Second", technologies: ["Vue.js", "Express"] },
          { title: "Test DB Query Project 3", description: "Third", technologies: ["Angular", "NestJS"] }
        ]
      });
    });

    it('should fetch all projects with findMany', async () => {
      const projects = await prisma.project.findMany({
        where: { title: { contains: "Test DB Query" } }
      });

      expect(projects.length).toBe(3);
      expect(projects.every(p => p.title.includes("Test DB Query"))).toBe(true);
    });
  });

  describe('Data Validation', () => {
    it('should enforce required fields (title)', async () => {
      await expect(
        prisma.project.create({ data: { description: "Missing title", technologies: ["JS"] } })
      ).rejects.toThrow();
    });

    it('should enforce required fields (description)', async () => {
      await expect(
        prisma.project.create({ data: { title: "Missing description", technologies: ["JS"] } })
      ).rejects.toThrow();
    });

    it('should enforce required fields (technologies)', async () => {
      await expect(
        prisma.project.create({ data: { title: "Missing technologies", description: "No techs" } })
      ).rejects.toThrow();
    });
  });
});
