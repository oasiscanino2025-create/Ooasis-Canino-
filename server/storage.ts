import { type Product, type Service, type Dog, type Event } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Products
  getAllProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  
  // Services
  getAllServices(): Promise<Service[]>;
  getService(id: string): Promise<Service | undefined>;
  
  // Dogs
  getAllDogs(): Promise<Dog[]>;
  getDog(id: string): Promise<Dog | undefined>;
  
  // Events
  getAllEvents(): Promise<Event[]>;
  getEvent(id: string): Promise<Event | undefined>;
}

export class MemStorage implements IStorage {
  private products: Map<string, Product>;
  private services: Map<string, Service>;
  private dogs: Map<string, Dog>;
  private events: Map<string, Event>;

  constructor() {
    this.products = new Map();
    this.services = new Map();
    this.dogs = new Map();
    this.events = new Map();
    this.initializeMockData();
  }

  private initializeMockData() {
    // Todo: remove mock functionality
    // Initialize with empty data for now
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getAllServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }

  async getService(id: string): Promise<Service | undefined> {
    return this.services.get(id);
  }

  async getAllDogs(): Promise<Dog[]> {
    return Array.from(this.dogs.values());
  }

  async getDog(id: string): Promise<Dog | undefined> {
    return this.dogs.get(id);
  }

  async getAllEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async getEvent(id: string): Promise<Event | undefined> {
    return this.events.get(id);
  }
}

export const storage = new MemStorage();
