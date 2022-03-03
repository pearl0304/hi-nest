import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundError } from 'rxjs';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne', () => {
    it('shuld return a movie', () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2022,
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    });
  });

  // it('shuld throw 404 error', () => {
  //   try {
  //     service.getOne(999);
  //   } catch (e) {
  //     expect(e).toBeInstanceOf(NotFoundError);
  //     expect(e.message).toEqual('Movie with ID not found');
  //   }
  // });
});
